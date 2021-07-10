# SEI-Project-4 - Know Your Mp

This is the final project I completed in the General Assembly Software Engineering Immersive project, a full stack application built with Django REST Framework and React. 

Deployed project:

## Overview and Timeframe
This was an 8 day project with the goal of building out a full-stack application whilst creating my own front and back end. I used Python Django API using Django REST Framework to serve my data from a Postgres database. The end product needed to contain multiple relationships and CRUD functionality. 

## Technologies Used:
Django 
Django REST Framework 
PostgreSQL
JavaScript (ES6)
React.js
HTML
CSS
Bulma
Axios
react-router-dom

## Development
I decided to base my project on the fact that the government's website is not the most user friendly and hard to navigate. I also believe there is a gap in the education system that politics needs to fill. 

I started by building out my entire back end, with my models, views and serialisers. I spent the first two days of the project ensuring the relationships were all working allowing my functionality to be seamless. Insomnia REST Client was a very useful tool at this stage of the project, allowing me to regularly check my code was running smoothly. 

``` python
class Comment(models.Model):
    text = models.TextField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    mp = models.ForeignKey(
        "mp.Mp",
        related_name="comments",
        on_delete= models.CASCADE
    )

    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="comments",
        on_delete= models.CASCADE
    )
```

Once I was happy that my backend was complete, I added a frontend and began building it out using React.js. I focused on an Index page, a show page, register, log in and out functionality and a basic profile page. Once the user was logged in, they had the option of leaving a comment, under an MP's profile of choice. 

```Javascript 
const handleSubmit = async (event) => {
    console.log(formData)
    try {
      const response = await axios.post('/api/comments/', formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      console.log(response)
      history.push(`/mps/${id}`)
    } catch (err) {
      console.log(err.message)
    }
  }
```

## Challenges 
I knew from the get go that working on this project alone was going to be a challenge, but one I wanted to prove to myself that I could do. Whilst working on the backend, I struggled getting the comment serializer to work, after allowing a fresh set of eyes to look at the code, I found a simple spelling mistake was the reason for the code breaking. 

Seeding the data took a long time, exacerbating the motivations behind my choice of theme for this project. 


## Wins

## Bugs