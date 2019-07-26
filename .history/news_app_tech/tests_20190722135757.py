from django.test import TestCase

# Create your tests here.
from django.test import TestCase

from django.urls import reverse


class RssIndexViewTests(TestCase):
    def test_no_feed(self):
        pass

    def test_user_feed(self):
        pass


def test_no_feed(self):
    response = self.client.get(reverse("index"))

    self.assertEqual(response.status_code, 200)
    self.assertEqual(response.context["feed"], None)
