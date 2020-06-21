from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=140)
    description = models.TextField(max_length=500)
    authorId = models.ForeignKey('Author', on_delete=models.CASCADE, verbose_name="Author Name")
    datePublished = models.DateTimeField("Created At", auto_now_add=True)
    numComments = models.CharField("Comments", max_length=20)
    numLikes = models.CharField("Likes", max_length=20)

    def __str__(self):
        return self.title

class Author(models.Model):
    firstName = models.CharField("First Name" ,max_length=120)
    lastName = models.CharField("Last Name" ,max_length=120)
    phone = models.CharField(max_length=20)
    numPosts = models.CharField("Posts" ,blank=True, null=True, max_length=20)
    numComments = models.CharField("Comments" ,blank=True, null=True, max_length=20)
    numLikes = models.CharField("Likes" ,blank=True, null=True, max_length=20)

    def __str__(self):
        return f'{self.firstName} {self.lastName}'

class Comment(models.Model):
    text = models.TextField(blank=True, null=True)
    postId = models.ForeignKey('Post', blank=True, null=True, on_delete=models.CASCADE, verbose_name="Post")
    authorId = models.ForeignKey('Author', blank=True, null=True, on_delete=models.CASCADE, verbose_name="Author Name")
    datePublished = models.DateTimeField("Created At", blank=True, null=True, auto_now_add=True)

    def __str__(self):
        return self.text

class Like(models.Model):
    postId = models.ForeignKey('Post', blank=True, null=True, on_delete=models.CASCADE)
    authorId = models.ForeignKey('Author', blank=True, null=True, on_delete=models.CASCADE)
    datePublished = models.DateTimeField("Created At", blank=True, null=True, auto_now_add=True)

    def __str__(self):
        return self.postId