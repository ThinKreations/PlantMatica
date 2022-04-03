import Image from 'next/image'
import Link from 'next/link'
import logo from '../src/icon.png'

export default function IconPlantMatica ({ wd, hg }) {
  return <Image src={logo} alt='PlantMatica' width={wd} height={hg} />
}
