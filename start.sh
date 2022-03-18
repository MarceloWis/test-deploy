#!/bin/bash

docker network create ap -d overlay

docker build -f Dockerfile.servicea -t marcelowis/servicea:latest . & process_id=$! wait $process_id
docker build -f Dockerfile.serviceb -t marcelowis/serviceb:latest . & process_id=$! wait $process_id
docker build -f Dockerfile.servicec -t marcelowis/servicec:latest . & process_id=$! wait $process_id
docker build -f ./kong/.docker/Dockerfile -t marcelowis/kong:latest . & process_id=$! wait $process_id

docker stack deploy -c stack-base-a.yml  servicea & process_id=$! wait $process_id
docker stack deploy -c stack-base-b.yml  serviceb & process_id=$! wait $process_id
docker stack deploy -c stack-base-c.yml  servicec & process_id=$! wait $process_id
docker stack deploy -c stack-base-key.yml  keycloak & process_id=$! wait $process_id
docker stack deploy -c ./kong/stack-base-key.yml  kong & process_id=$! wait $process_id


