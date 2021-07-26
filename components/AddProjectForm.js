import { useState } from 'react';
import {createProject} from '../lib/db'

export default function AddProjectForm(){
    const [projectInfo, setProjectInfo] = useState({});
    const [error, setError] = useState(false)
    const allowedTypes = ['image/png', 'image/jpeg']

    const handleFile = (e) =>{
        let selectedFile = e.target.files[0]

        if(selectedFile && allowedTypes.includes(selectedFile.type)){
            setProjectInfo({...projectInfo, file: selectedFile})
            setError(false)
        }
        else{
            setError(true)
            if(projectInfo.file)
                delete projectInfo.file;
        }

    }

    const handleChange = (e, field) =>{
        setProjectInfo({...projectInfo, [field]:e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        createProject(projectInfo);
        setProjectInfo({})
    }

    return (
        <form
            className="w-full md:w-6/12 p-4 mt-4 border bg-blue-50 rounded-lg contact-form"
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold text-center">Add A Project</h2>

            <label className="block">
                Project Title
                <input
                    type="text"
                    className="block"
                    onChange={(e) => handleChange(e, "title")}
                    value={projectInfo.title}
                    required
                />
            </label>
            <label className="block">
                Description
                <input
                    type="text"
                    className="block"
                    onChange={(e) => handleChange(e, "description")}
                    value={projectInfo.description}
                    required
                />
            </label>
            <label className="block">
                LiveLink
                <input
                    type="text"
                    className="block"
                    onChange={(e) => handleChange(e, "link")}
                    value={projectInfo.link}
                    required
                />
            </label>
            <label className="block">
                Github Link
                <input
                    type="text"
                    className="block"
                    onChange={(e) => handleChange(e, "github")}
                    value={projectInfo.github}
                    required
                />
            </label>
            <label className="block">
                Cover Image
                <input type="file" className="block" onChange={handleFile} required/>
            </label>
            
            {error&& <p className="text-red-400">Image Error</p>}
            
            <button type="submit" className="border border-black p-2 mt-4 rounded">
                Submit
            </button>
        </form>
    );
}