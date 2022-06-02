from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        try:
            return request.user.is_superuser or obj.author == request.user
            # return obj.author == request.user or request.user.is_superuser
        
        except :
            print(f"Obj is: \n request: ",{obj,request})
            return obj.user == request.user
        
        finally:
            pass