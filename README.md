# React_Firebase_Movix 
This is a full stack app built with React and Firebase 
We use firebase to build our backend Firebase offers abilities for authenticate user and for clouding storage 
we fetch our data from themoviedb.org and we create a home displaying random movies. 
We authenticate the users via email and password with some functions inside Firebase docs 
After the user is authenticated he can enable our Protected routes (Popular,Top_rated,Trending,Horror,up_coming) 
The authenticate users can also add or delete their favorite movies and for this we used the cloudstorage database of Firebase when we can check all the users and their favorite movies.
Some React key elements uses are : useEffect for fetching our data, React Router Dom for creating the urls useNavigate and Link for redirecting the user, useState for controlling the state of our variables, context API for passing the state in different componemts and prop drilling .
