---
layout: post
title: Final Blog Trimester 2
permalink: /finalBlog/
---

### Reflection on Trimester 2:

#### Over the course of this Trimester 2, I felt like I grew a lot from being in this class. At first I was struggling to keep up with assignments and putting effort but over time I overcame that and worked hard to bring my grade up and learn.

### 5 Things/Accomplishments I did:

#### Frontend and Backend Development 
##### Developed a frontend page and an api/model in the backend storing binary/decimal conversions in the backend data table. 
##### They would both be connected through crud methods and python URI (connecting to the api). 
##### We use data in the backend for Binary Trials and Converter (my features) 

```python
class BinaryConverter(db.Model):
    """
    BinaryConverter Model
    
    Represents a quiz with a question and answer associated with a user.
    """
    __tablename__ = 'binaryConverter'

    id = db.Column(db.Integer, primary_key=True)
    binary = db.Column(db.String(255), nullable=False)
    decimal = db.Column(db.String(255), nullable=False)
     
    def __init__(self, binary, decimal):
        """
        Constructor for Binary.
        """
        self.binary = binary
        self.decimal = decimal

    def __repr__(self):
        """
        Represents the QuizCreation object as a string for debugging.
        """
        return f"<QuizCreation(id={self.id}, question='{self.binary}', answer='{self.decimal})>"

    def create(self):
        """
        Adds the quiz to the database and commits the transaction.
        """
        try:
            db.session.add(self)
            db.session.commit()
        except SQLAlchemyError as e:
            db.session.rollback()
            raise e

    def read(self):
        """
        Returns the quiz details as a dictionary.
        """
        return {
            "id": self.id,
            "binary": self.binary,
            "decimal": self.decimal,
        }
```

#### Binary Trials 
##### This is a game where two player compete towards reaching the end. They take turns answer questions where they have to convert decimal to binary. 
##### If they get it right they get to go forward, but if they get it wrong they stay in place 
##### Uses a ready up feature where the two players have to ready up to enter the game
##### Helps the user learn and solidfy there understanding on binary

![Binary Converter](../images/binaryConverter.png)

#### Binary Converter

##### This is my second feature, which allows the user to test and check binary conversions
##### Can act like as a tool since users can test if they got the answer correct
##### Helps solidify the users understanding

#### Quiz Answers and Questions

##### Developed an api for a quiz that stores questions and the answers
##### Saves the users answers, which questions they answered right or wrong along with what the right answer is

#### Collaboration

### Project Demo + Blog









