---
layout: post
title: Final Blog Trimester 2
permalink: /finalBlog2/
---

### Project Demo + Blog

#### CPT Requirements

#### Lists and Iteration

- There is a get method that retrieves all database entries, stores them in a list (entries), and uses list comprehension to process them.
- BinaryConverter.query.all() returns a list containing all the entries from the database.
- Each item in this list is an instance of the BinaryConverter class (representing a row in the database).
- The list can be looped through using iteration to process data.


```python
def get(self):
    try:
        entries = BinaryConverter.query.all()  # Fetch data
        results = [entry.read() for entry in entries]  # Convert to list
        return jsonify(results)  # Return JSON response
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Return error message

```

#### Algorithmic Code
-  The function first takes in JSON data, creates a new binary converter object, saves it to the database, and then sends back a response.

- Instead of doing everything in one place, it uses the BinaryConverter class to handle data, making the code cleaner and easier to manage.

- It takes in data from an API request and returns the response in JSON format, which makes it easy for the frontend or other apps to use.

```python
def post(self):
    data = request.get_json()  # Step 1: Receive input data
    post = BinaryConverter(data['binary'], data['decimal'])  # Step 2: Create new object
    post.create()  # Step 3: Save to database
    return jsonify(post.read())  # Step 4: Return JSON response

```

#### Use of Dictionares 
- Stores Data in an Organized Way: Each database entry is converted into a dictionary, where column names (like "id", "binary", and "decimal") act as keys, and the actual data are the values.

- Makes API Responses Easy to Use: Since APIs typically send and receive JSON, which is just a formatted dictionary, converting database entries into dictionaries ensures the data is structured and readable.

- Helps with Data Processing: Dictionaries make it easy to access, modify, and send data, allowing the frontend or other parts of the app to work with structured information efficiently.

``` python 
results = [entry.read() for entry in entries]  # Converts rows into dictionaries
```

### Output
```python
[
    { "id": 1, "binary": "1010", "decimal": 10 },
    { "id": 2, "binary": "1100", "decimal": 12 }
]

```

### Practice MCQ

<img src="{{site.baseurl}}/navigation/images/MCQ.png" width="750px">

- I did end up getting a 14/67 which is a not a good grade. 
- I didn't really know what I was doing and I was just guessing

#### What I can do improve my score:
- Watch Videos on the topics to get a better understanding
- Ask Questions on the topics to teamates
- Take Practice Tests


#### Feedback from Night @ Museum:

- Night @ Museum was a fun event as we were able to learn and present
our project 
- Some feedback I followed was getting better at presening and html styling
- This made our presenatation better and much stronger 

### Strengths 

- Good at Presenting 
- Well Styled HTML

### Weaknesses
- Time managment
- Less Effort
- Lack of Frontend Integration
- Error Handling





<a href="http://127.0.0.1:4887/binaryFrontend/finalBlog3/" target="_blank">RETROSPECTIVE</a>









