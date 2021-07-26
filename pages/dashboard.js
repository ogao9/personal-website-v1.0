import Meta from '../components/Meta'
import Intro from '../components/Intro'
import AddProjectForm from '../components/AddProjectForm'
import MarkdownEditor from '../components/MarkdownEditor';
import { useAuth } from '../lib/auth';

export default function dashboard() {
    const auth = useAuth();
    console.log(auth.user)

    return (
        <>
            <Meta title="Dashboard | Oliver Gao" />
            <Intro title="Dashboard" subtitle={`Welcome ${auth.user ? auth.user.name : ""}!`} />
            <MarkdownEditor/>
            <AddProjectForm/>
        </>
    );
}



