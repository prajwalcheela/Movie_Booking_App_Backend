 
 
 const userTypes={
    CUSTOMER:"CUSTOMER",
    ADMIN:"ADMIN"
  }

  const userStatus={
    APPROVED:"APPROVED",
    REJECTED:"REJECTED",
    PENDING:"PENDING",
    BLOCKED:"BLOCKED"
  }
  const releaseStatus={
    released:"RELEASED",
    unreleased:"UNRELEASED",
    blocked:"BLOCKED"
  }
  const bookingStatus={
    confirmed: "CONFIRMED",
    pending: "PENDING",
    cancelled: "CANCELLED",
    expired:"EXPIRED",
    failed:"FAILED",
    inprogress:"IN_PROGRESS"
  }
  const paymentStatus={
    pending:"PENDING",
    success:"SUCCESS",
    failed:"FAILED"
  }

  module.exports={
    userTypes,
    userStatus,
    releaseStatus,
    bookingStatus,
    paymentStatus
  }