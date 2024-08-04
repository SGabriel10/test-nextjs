import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="/logo.png"
      width={50}
      height={50}
      alt="Picture of the author"
    />
  )
}