'use client'
import React, { useEffect } from 'react'
import UnAccreditCourses from './UnAccreditCourses/UnAccreditCourses'
import '../../(admin)/dashboard/dashboard.css'
// import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Layout from '../SubAdminLayout/Layout'
import UnAccreditEvents from './UnAccreditEvents/UnAccreditEvents'

export default function page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);
  return (
    <Layout title = "Non-Accredit Elemnts">

<div>
  <nav>
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
      <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Courses</button>
      <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Events</button>
      {/* <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Courses</button> */}
    </div>
  </nav>


  <div className="tab-content" id="nav-tabContent">
    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
      <UnAccreditCourses/>
    </div>
    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>
      <UnAccreditEvents/>
    </div>
    {/* <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex={0}>
      ,,,,,
    </div> */}
  </div>
</div>
    </Layout>
    
  )
}
