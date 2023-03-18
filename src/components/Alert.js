import React from 'react'

function Alert(pro) {
  return (
 pro.message && <div className={`alert alert-${pro.message.type} alert-dismissible fade show`} role="alert">
  <strong>{pro.message.type}</strong> {pro.message.msg}
</div>

  )
}

export default Alert