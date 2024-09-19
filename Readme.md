# Untitled

Date: September 20, 2024

### Project Introduction

GShepherd is a small project we created based on Slido. As more and more courses and events now require interaction between the stage and the audience, we attempted to design a website like Slido, hoping to make the design more tailored to course needs.

![GShepherd_Logo.png](/picture/GShepherd_Logo.png)

### System Architecture

- Using MEVN stack (MongoDB, Express, Vue.js, Node.js)
    
    ![image.png](/picture/image.png)
    
- Design w. MVC architecture (Model-View-Controller)
    - File structure
        
        A basic structure for MVC arch.
        
        ![image.png](/picture/image%201.png)
        
        ![image.png](/picture/image%202.png)
        
    - packages used in backend:
        
        · expressjs/cors for CORS middleware
        
        · express-session for session middleware
        
        · Passport.js for authentication middleware
        
        · Mongoose for easier communicate w. MongoDB
        
        . ESlint & Prettier for code linting and formatting
        
    - Database design
        - User
            
            User login/registration
            Subsequent authentication
            
        - Room
            
            A room can have multiple activities
            The entity that users join
            
        - Event
            
            Can change activity type according to needs
            
        - Record
            
            Records submitted by users for activities
            
        
        Although MongoDB is NoSQL database, but since we're using Mongoose, schema for each document is needed.
        
        The image shows current layout of the system, since we're implementing inheritance model on Event and Record, it gains more flexibility for future usage.
        
        ![image.png](/picture/image%203.png)
        
- and RESTful API (Representational State Transfer)

### Some Screenshot of the project

![image.png](/picture/image%204.png)

![image.png](/picture/image%205.png)

![image.png](/picture/image%206.png)

![image.png](/picture/image%207.png)

![image.png](/picture/image%208.png)

![image.png](/picture/image%209.png)