import Article from "@/src/models/article";
import Image from "next/image";
import moment from "moment";
import {useRouter} from "next/navigation";
import Category from "@/src/components/articles/category";

export default function ArticleItem({article}: { article: Article }) {
    const router = useRouter()
    const myLoader = ({src}: { src: string }) => `${src}`
    const publishedAt = moment(article.published_at).format('MMMM Do YYYY, h:mm:ss A');
    return (
        <>
            <div className="rounded bg-gray-200 dark:bg-gray-800 p-5 hover:shadow-2xl">
                <Image loader={myLoader} src={article.image_url} alt={article.slug} width="450" height="450"
                       className="rounded h-56"/>
                <h3 className="text-center mt-5 text-2xl hover:text-blue-500 hover:cursor-pointer"
                    onClick={() => router.push('/articles/' + article.slug)}>
                    {article.title}
                </h3>
                <hr className="my-5"/>
                <div className="md:flex justify-between text-sm">
                    <p className="p-2 text-center">
                        {publishedAt}
                    </p>
                    {article.category_label && <Category category={article.category_label}/>}
                </div>
            </div>
        </>
    )
}