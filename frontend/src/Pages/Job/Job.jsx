import React from 'react'

const Job = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-4">
                <h3>Management</h3>
                <div className="col-md-12">
                    <button className='btn btn-primary'>Management</button>
                </div>
                <div className="col-md-12"><button className='btn btn-secondary'>Mega Photo Manager</button></div>
                <div className="col-md-12"><button className='btn btn-warning'>Green LTD PVD</button></div>
                <div className="col-md-12"><button className='btn btn-warning'>Black Chain Imc</button></div>
            </div>
            <div className="col-md-4">
                <h3>Photography</h3>
                <div className="col-md-12">
                    <button className='btn btn-primary'>Photography</button>
                </div>
                <div className="col-md-12"><button className='btn btn-secondary'>M&S VMAG</button></div>
                <div className="col-md-12"><button className='btn btn-warning'>Kantipur TV</button></div>
                <div className="col-md-12"><button className='btn btn-warning'>Hamro Patro</button></div>
            </div><div className="col-md-4">
                <h3>Videography</h3>
                <div className="col-md-12">
                    <button className='btn btn-primary'>Videography</button>
                </div>
                <div className="col-md-12"><button className='btn btn-secondary'>Kantipur</button></div>
                <div className="col-md-12"><button className='btn btn-warning'>AV News</button></div>
                <div className="col-md-12"><button className='btn btn-warning'>Lone Tree Marketing</button></div>
            </div>
        </div>
    </div>
  )
}

export default Job; 