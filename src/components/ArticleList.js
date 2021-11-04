import Article from "./Article";

function ArticleList(props) {

    const articleCards = props.blogArticle.map(post => {
        return <Article 
        key={post.id} 
        title={post.title}
        date={post.date}
        preview={post.preview}
        />
    })
    
    return (
          <main>
              {articleCards}
          </main>
      )
}

export default ArticleList;