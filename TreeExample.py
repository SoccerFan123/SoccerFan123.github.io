class Node():
    def __init__(self, question):
        self.question = question
        self.choice1 = None
        self.choice1Name = None
        self.choice2 = None
        self.choice2Name = None

    def __repr__(self):
        return f'{self.question}\nOption 1:{self.choice1Name}\nOption2:{self.choice2Name}'

q = Node("Do you want to get up early, or sleep in?")
choice1 = Node("Do you want to eat breakfast, or go to work?") 
choice2 = Node("Should you rush to work, or take your time and risk getting berated by your boss?")
q.choice1 = choice1
q.choice1Name = "Get up early"
q.choice2 = choice2
q.choice2Name = "Sleep in"
print(q.question)

print(q)
print(q.choice1)
print(q.choice2)
