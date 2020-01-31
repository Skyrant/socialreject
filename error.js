class TwitterSearchError extends Error {
    constructor(message) {
	super(message)
	this.name='TwitterSearchError'
	this.message = message
    }
}
class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
    this.message = message
  }
}
class PermissionError extends Error {
  constructor(message) {
    super(message)
    this.name = 'PermissionError'
    this.message = message
  }
}
class DatabaseError extends Error {
  constructor(message) {
    super(message)
    this.name = 'DatabaseError'
    this.message = message
  }
}
module.exports = {
    TwitterSearchError,
    ValidationError,
    PermissionError,
    DatabaseError
}
