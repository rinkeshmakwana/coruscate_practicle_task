from django.contrib import admin

from .models import Post, Author, Comment, Like
from rangefilter.filter import DateRangeFilter, DateTimeRangeFilter

class AuthorAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'phone', 'numPosts', 'numComments', 'numLikes']
    search_fields = ['firstName', 'lastName', 'phone']
    class Meta:
        model = Author

class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'authorId', 'datePublished', 'numComments', 'numLikes']
    search_fields = ['title', 'description', 'authorId']
    list_filter = ['datePublished', ('datePublished', DateRangeFilter), ('datePublished', DateTimeRangeFilter)]
    class Meta:
        model = Post

class CommentAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'postId', 'authorId', 'datePublished']
    class Meta:
        model = Comment

class LikeAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'authorId', 'datePublished']

admin.site.register(Post, PostAdmin)
admin.site.register(Author, AuthorAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Like, LikeAdmin)