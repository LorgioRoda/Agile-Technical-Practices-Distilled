export const squares: any[] = [0,0,0,0,0,0,0,0,0]

export let playerA

export let playerB


export const handlePlayerA = (choose) => {
  squares[choose] = "X"
  return squares
}