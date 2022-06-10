import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ myWork }) => {
    const { _id, image, name, Live, git, title, descrip } = myWork
    const navigate = useNavigate()
    const handleDetails = (id) => {
        navigate(`/projectsDetails/${_id}`)
    }
    return (
        <div>
            <div class="card w-96 text-white shadow-md bg-gray-900 ml-2 mr-2 lg:ml-0 lg:mr-0">
                <div className='card-img'>
                    <figure><img className='project-img' src={image} alt="Shoes" /></figure>
                </div>
                <div class="card-body">
                    <div className='flex gap-x-2 text-xl'>
                        <div className='tooltip' data-tip="Live Link">
                            <a href={Live} target='_blank' rel='noreferrer'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                        <div className='tooltip' data-tip="Source Code">
                            <a href={git} target='_blank' rel='noreferrer'><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <h2 class="card-title coral">
                        {name}
                        <div class="badge badge-secondary">{title}</div>
                    </h2>
                    <p>{descrip}</p>

                    <div className='flex justify-center'>
                        <button onClick={() => handleDetails(_id)} className='w-full border px-3 py-1 mt-3 rounded-full details font-bold text-white'>View Details</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Project;