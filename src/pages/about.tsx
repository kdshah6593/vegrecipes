import { useRouter } from 'next/router';
import Link from 'next/link';

const About = () => {
    const router = useRouter();

    return (
        <article>
            <h1>{router.query.slug}</h1>
            <div>Welcome to VegRecipes. This is the about page!</div>

            <div>
                Go back to <Link href="/">Home Page!</Link>
            </div>
        </article>
    )
}

export default About