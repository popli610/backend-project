class ApiResponse{
    constructor(StatusCode ,data ,message="Success"){
        this.StatusCode = StatusCode
        this.data = data
        this.message = message
        this.success = StatusCode<400
    }
}




//Status Code 

// Informational responses(100-199)
// Successful responses(200-299)
// Redirectional responses(300-399)
// Client error responses(400-499)
// Server error responses(500-599)