
export type ControllerErrorPayload = {
  code?: number
  message: string;
}

export type ControllerSuccessPayload<T> = {
  code?: number
  data: T
}