import { ChangeEvent, FormEvent, useState } from 'react'
import {
  Form,
  Inputs,
  InputsFile,
  Labels,
  UploadsContainer,
  Modal,
  Backdrop,
  Button,
  ActionsButtons,
  Buttons,
  CheckIcon,
  ErrorIcon,
} from './uploads'
import axios from 'axios'
import { FileUpload } from '@mui/icons-material'
import Templates from '../../Components/Templates'

import { MdOutlineDangerous } from 'react-icons/md'

import { useNavigate } from 'react-router-dom'

const Uploads = () => {
  const navigate = useNavigate()
  const [arquivo, setArquivo] = useState<File | string>('')
  const [thumbnail, setThumbnail] = useState<File | string>('')
  const [title, setTitle] = useState<string>('') // Correção: title deve ser apenas string
  const [message, setMessage] = useState({
    message: '',
    icon: '',
    type: '',
  })
  const [backdrop, setBackdrop] = useState<boolean>(false)
  const [filesNames, setFilesNames] = useState({
    thumbnail: '',
    video: '',
  })

  const enviarArquivo = async (e: FormEvent) => {
    e.preventDefault()

    // if (!title || !arquivo || !thumbnail) {
    //   setMessage('Por favor, preencha todos os campos!')
    //   return
    // }

    const formData = new FormData()
    formData.append(
      'files',
      arquivo instanceof File ? arquivo : new Blob([arquivo])
    )
    formData.append(
      'files',
      thumbnail instanceof File ? thumbnail : new Blob([thumbnail])
    )
    formData.append('title', title)

    const headers = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }

    try {
      const res = await axios.post(
        'http://localhost:8080/upload-videos',
        formData,
        headers
      )
      setMessage({
        message: 'Video uploaded successfully!',
        type: 'success',
        icon: '',
      })
    } catch (err) {
      setMessage({
        message: 'Algo deu errado!',
        icon: '',
        type: 'danger',
      })
    }

    setArquivo('')
    setThumbnail('')
    setTitle('')
    setBackdrop(true)
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setArquivo(e.target.files[0])
      setFilesNames({ ...filesNames, video: e.target.files[0].name })
    }
  }

  const handleThumbnail = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setThumbnail(e.target.files[0])
      setFilesNames({ ...filesNames, thumbnail: e.target.files[0].name })
    }
  }

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const closeModal = () => {
    setBackdrop(false)
  }

  return (
    <>
      <Templates>
        <UploadsContainer>
          <Form onSubmit={enviarArquivo}>
            <Inputs
              type="text"
              value={title}
              required
              onChange={handleTitle}
              placeholder="Digite o titulo do seu video..."
            />
            <Labels
              htmlFor="video"
              onClick={() => document.querySelector('.video')?.click()}
            >
              <FileUpload />
              {filesNames.video || 'Escolha o seu vídeo'}
            </Labels>
            <InputsFile
              name="video"
              className="video"
              type="file"
              accept="video/mp4"
              onChange={handleFileChange}
              required
            />
            <Labels
              htmlFor="thumbnail"
              onClick={() => document.querySelector('.thumbnail')?.click()}
            >
              <FileUpload />
              {filesNames.thumbnail || 'Escolha a thumbnail do seu vídeo'}
            </Labels>
            <InputsFile
              className="thumbnail"
              type="file"
              accept="image/*"
              onChange={handleThumbnail}
              required
            />
            <Button type="submit">Enviar</Button>
          </Form>
        </UploadsContainer>
        {backdrop && (
          <Backdrop>
            <Modal>
              {message.type == 'success' && (
                <>
                  <p>{message.message}</p>
                  <CheckIcon />
                </>
              )}
              {message.type != 'success' && (
                <>
                  <p>{message.message}</p>
                  <ErrorIcon />
                </>
              )}
              <ActionsButtons>
                <Buttons onClick={() => navigate('/')}>Home</Buttons>
                <Buttons onClick={closeModal}>New video</Buttons>
              </ActionsButtons>
            </Modal>
          </Backdrop>
        )}
      </Templates>
    </>
  )
}

export default Uploads
