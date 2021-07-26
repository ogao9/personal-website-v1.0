import Meta from '../components/Meta'
import Intro from '../components/Intro'
import AddProjectForm from '../components/AddProjectForm'
import MarkdownEditor from '../components/MarkdownEditor';

export default function dashboard() {

    return (
        <>
            <Meta title="Dashboard | Oliver Gao" />
            <Intro title="Dashboard" subtitle={`Welcome to the Dashboard!`} />
            <MarkdownEditor/>
            <AddProjectForm/>
        </>
    );
}



