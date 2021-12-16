import Grid from '@mui/material/Grid';
import Post, { PostProps, AvatarType } from '../components/Post';

const posts:PostProps[] = [
    {
        id: "0x158BFbb9281794461d670E93b6De0C8a98F79Cf1",
        author: {
            address: "0x158BFbb9281794461d670E93b6De0C8a98F79CfE",
            avatar: {
                type: AvatarType.Letter,
                value: "A"
            }
        },
        media: [],
        title: "Post 1",
        date: "September 14, 2016", 
        text: "Subtitle"
    }
]

export default function Posts() {

    const postsList = posts.map(p => {
        return <Post author={p.author} media={p.media} title={p.title} date={p.date} text={p.text} id={p.id} key={p.id} />
    })

    return postsList.length === 0 ? <p> No posts available </p> : (
        <Grid container spacing={3}>
            {postsList}
        </Grid>
    );
}
