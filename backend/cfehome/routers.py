from rest_framework.routers import DefaultRouter

from loans.viewsets import LoanGenericViewSet

router = DefaultRouter()
router.register('loans-abc', LoanGenericViewSet, basename='loans')
# print(router.urls)
urlpatterns = router.urls