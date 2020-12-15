import { useRouter } from 'next/router'

const Issue = () => {
    const router = useRouter()
    const { year } = router.query
    return <p>Drew Review { year }</p>
}

export default Issue