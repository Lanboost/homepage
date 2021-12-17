build:
	docker build -t lanboost.net:8001/testwebapp .
	docker push lanboost.net:8001/testwebapp:latest