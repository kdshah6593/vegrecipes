import { useRouter } from 'next/router';

const Recipe = () => {
    const router = useRouter();

    return (
        <article>
            <h1>{router.query.slug}</h1>
            <div>Welcome to VegRecipes. This is a recipe page!</div>
        </article>
    )
}

export default Recipe