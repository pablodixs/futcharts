import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatTime(time: number | string | Date) {
  const date = new Date(time)
  const formated = formatDistanceToNow(date, { locale: ptBR, addSuffix: true })

  return formated
}

export function formatDate(date: number | string) {
  if(date === undefined) {
    return
  }
  
  const dateFor = new Date(date)
  const formated = format(dateFor, "eeee',' dd 'de' MMMM 'de' yyyy '-' HH'h'mm", { locale: ptBR })

  return formated
}
