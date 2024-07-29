import Image from 'next/image'
import Link from 'next/link'

const services = [
    { title: "My Posts", src: "posts" },
    { title: "Activity", src: "activity" },
    { title: "Marketplace", src: "market" },
    { title: "Events", src: "events" },
    { title: "Albums", src: "albums" },
    { title: "Videos", src: "videos" },
    { title: "News", src: "news" },
    { title: "Courses", src: "courses" },
    { title: "Lists", src: "lists" },
    { title: "Settings", src: "settings" },
]

const Services = () => {
    return (
        <section className='flex flex-col gap-4 rounded-md bg-white shadow-md shadow-slate-400 py-4 px-2'>
            {
                services.map(service => <Link href='' key={service.title} className='flex items-center gap-4 hover:text-gray-700 hover:bg-gray-200 rounded-md duration-150 pl-2 py-1'>
                    <Image src={`/images/${service.src}.png`} width={16} height={16} alt={service.title} />
                    <p>{service.title}</p>
                </Link>)
            }

        </section>
    )
}

export default Services
