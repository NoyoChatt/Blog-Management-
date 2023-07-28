import React from 'react'
import { deleteBlog } from '../lib/storeFunc.js'
import { useNavigate } from 'react-router-dom'

const DelModal = ({id}) => {

    const navigate = useNavigate()
    const handleDelete = async() => {
        try{
            await deleteBlog(id)
            navigate('/')
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div className="modal fade" id="delModal" tabIndex="-1" aria-labelledby="delModalLabel" aria-hidden="true">
        
        <div className="modal-dialog">

            <div className="modal-content">

                <div className="modal-header">
                    <h5 className="modal-title" id="delModalLabel">Delete Blog</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                    Are you sure you want to delete this blog?
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleDelete}>Delete</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default DelModal