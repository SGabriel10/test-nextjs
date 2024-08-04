import Image from 'next/image'
 
export default function Page({imagen}) {
  return (
    <Image
      src={imagen}
      width={50}
      height={50}
      alt="Picture of the author"
    />
  )
}