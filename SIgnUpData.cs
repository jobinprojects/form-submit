using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace FeeManagementSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FeeStatusController : ControllerBase
    {
        [HttpPut("signup")]
        public IActionResult SignUp([FromBody] SignUpFormData formData)
        {
            // Access the data sent from the frontend
            var enrollmentNo = formData.EnrollmentNo;
            var fullName = formData.FullName;
            var email = formData.Email;
            var mobile = formData.Mobile;
            var year = formData.Year;
            var paymentMode = formData.PaymentMode;
            var amount = formData.Amount;

            // Log the received data
            Console.WriteLine("Enrollment No: " + enrollmentNo);
            Console.WriteLine("Full Name: " + fullName);
            Console.WriteLine("Email: " + email);
            Console.WriteLine("Mobile: " + mobile);
            Console.WriteLine("Year: " + year);
            Console.WriteLine("Payment Mode: " + paymentMode);
            Console.WriteLine("Amount: " + amount);

            // Send a response back to the frontend
            return Ok(new { message = "Data received successfully" });
        }

        [HttpGet("students")]
        public IActionResult GetStudents()
        {
            // Implement logic to retrieve students' fee status data
            var students = new List<Student>(); // Replace with your logic to fetch students

            // Return the students' fee status data as JSON
            return Ok(students);
        }

        [HttpPost("students/{studentId}")]
        public IActionResult UpdateStudentFeeStatus(string studentId, [FromBody] FeeStatusUpdateData updateData)
        {
            // Implement logic to update the student's fee status
            // Access the data sent from the frontend
            var action = updateData.Action;
            var value = updateData.Value;

            // Perform necessary updates based on the action and value
            // You can interact with databases, perform validations, or any other necessary operations

            // Return a response indicating the result of the update
            return Ok(new { message = "Student fee status updated successfully" });
        }

        public class SignUpFormData
        {
            // Define properties for signup form data
            public string EnrollmentNo { get; set; }
            public string FullName { get; set; }
            public string Email { get; set; }
            public string Mobile { get; set; }
            public string Year { get; set; }
            public string PaymentMode { get; set; }
            public decimal Amount { get; set; }
        }

        public class FeeStatusUpdateData
        {
            // Define properties for fee status update data
            public string Action { get; set; }
            public string Value { get; set; }
        }

        public class Student
        {
            // Define properties for student data
            public string Id { get; set; }
            public string EnrollmentNo { get; set; }
            public string FullName { get; set; }
            public string Email { get; set; }
            public string Mobile { get; set; }
            public string Year { get; set; }
            public List<FeeDetails> FeeDetails { get; set; }
            public string FeeStatus { get; set; }
            public string Remarks { get; set; }
            public string Reason { get; set; }
        }

        public class FeeDetails
        {
            // Define properties for fee details
            public string ModeOfPayment { get; set; }
            public decimal Amount { get; set; }
            public string ProofOfPayment { get; set; }
        }
    }
}
