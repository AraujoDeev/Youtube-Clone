export interface IUser {
  email?: string
  token?: string
  username?: string
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>
  logout: () => void
  username?: string
}

export interface IAuthProvider {
  children: JSX.Element
}
