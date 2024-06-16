# Car-Leasing-Calculator

HTML Structure  
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Created a form with specific input elements: a dropdown for car type, range and number inputs for car value, lease period, and down payment.    
Structured the HTML to clearly separate the input section and the results section for ease of understanding and styling.  
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CSS Styling  
Applied styles to ensure the form looks clean and professional.    
Used flexbox for the layout, ensuring a responsive design that adapts to various screen sizes.  
Included media queries to handle smaller screen sizes effectively.  
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
JavaScript Logic  
Added event listeners to capture and respond to user input changes dynamically.  
Synchronized range inputs with corresponding number inputs for car value and lease period to provide flexibility in user input.  
Calculated the monthly installment using the standard loan amortization formula, considering the car type's interest rate.  
Included logic to compute the down payment based on the percentage of the car value.  
Ensured that user inputs are within specified valid ranges (car value between 10,000 and 200,000 euros, lease period between 12 and 60 months, down payment between 10% and 50%).
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
