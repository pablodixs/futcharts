import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatTime(time: number | string | Date) {
  const date = new Date(time)
  const formated = formatDistanceToNow(date, { locale: ptBR, addSuffix: true })

  return formated
}

export function formatDate(date?: number | string) {
  // const dateFor = new Date(date)
  const dateFor = new Date('2023-03-15T20:00:00+00:00')
  const formated = format(dateFor, "eeee',' dd 'de' MMMM 'de' yyyy '-' HH':'mm", { locale: ptBR })

  return formated
}
