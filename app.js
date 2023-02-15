import ch from 'chalk'
import readlineSync from 'readline-sync'

let data;
let list = []
let menssages = [
 '\n<============ Digite suas propriedades CSS ============>',
 '<============ Para vizualisar digite SAIR =============>\n'
]

const randRgb = (msg) => {
  const rand = () => Math.floor(Math.random() * 255);
  console.log( ch.rgb(rand(), rand(), rand())(msg))
}

menssages.map(menssage=> randRgb(menssage))

do{
  data = readlineSync.question('')
  if (data && data.toLocaleLowerCase() != 'sair') list.push(data)
} while (data.toLocaleLowerCase() !== 'sair')

list.length == 0 
  ? randRgb('\n<============== Lista não possui itens! ===============>\n')
  : randRgb('\n<================ Lista de propiedades ================>\n')
  list.sort().map((item,i)=>randRgb(`${i+1}° - ${item}`))