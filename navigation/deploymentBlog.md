---
layout: page
title: Deployment Blog
permalink: /deployment/blog/
---
# Deployment
## Step one: change ports to 8501
### Main.py
```python
if __name__ == "__main__":
    # change name for testing
    app.run(debug=True, host="0.0.0.0", port="8501")
```
This will tell the backend to run on the port 8501

### Dockerfile
```dockerfile
EXPOSE 8087
```
This will tell the docker container to listen to the port 8087 during runtime

### Docker-compose.yml
```yaml
ports:
    - "8501:8501"
```
This will tell the docker container to map the port 8501 to the port 8501 on the host machine, allowing flask to be accessed via port 8501 on the host machine

### nginx_file
```nginx
proxy_pass http://localhost:8501;
```
This will tell the nginx server to pass requests to the port 8501 on the host machine

## Step two: create an instance in AWS
- Navigate to the AWS console
- Click on the EC2 service
- Click on the instance dropdown and create an instance (binary.stu.nighthawkcodingsociety.com)

## Step three: clone backend on AWS server
- Use git clone to clone the backend onto the AWS server
- setup .env file
- setup backend on the server
    - install python venv (python -m venv venv)
    - install requirements (source venv/bin/activate, pip install -r requirements.txt)

## Step four: build and test docker container
- Build the docker container on the AWS server (docker-compose build)
- Run the docker container on the AWS server (docker-compose up -d)
- Test the docker container by running curl localhost:8051
- run docker ps to see if the container is running

## Step five: setup nginx
- navigate to the /etc/nginx/sites-available directory
- create an nginx config file (sudo nano binary_ngnix_file)
- write the following into the file
```nginx
servserver {
        listen 80;
        listen [::]:80;
        server_name binary.stu.nighthawkcodingsociety.com;

        location / {
                proxy_pass http://localhost:8051;

                # Preflighted requests
                if ($request_method = OPTIONS) {
                add_header "Access-Control-Allow-Credentials" "true" always;
                add_header "Access-Control-Allow-Origin"  "https://voyager162.github.io" always;
                add_header "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS, HEAD" always;
                add_header "Access-Control-Allow-MaxAge" 600 always;
                add_header "Access-Control-Allow-Headers" "Authorization, Origin, X-Origin, X-Requested-With, Content-Type, Accept" always;
                return 204;
                }
        }
}
```
- save changes
- navigate to the /etc/nginx/sites-enabled directory
- then run, sudo ln -s /etc/nginx/sites-available/binary_nginx_file /etc/nginx/sites-enabled/binary_nginx_file
- validate by running sudo nginx -t
- restart nginx by running sudo systemctl restart nginx

## Step six: certbot config
- run sudo certbot --nginx
- select the number corrosponding to the nginx config file

# Collage Board Video Notes

### VIDEO 4.1.1-2: 

- Around 1975 we had big computer, discovered that working with big computers in one area was bad so the internet was thought about
- Computers can send and receive data; they are an object use for
- A Packet is a small amount of data sent over a network. It includes a source and destination for this information. It is like taking a piece of a puzzle.
- Computers connect and communicate by creating a computer network: interconnected computing devices capable of sending or receiving data
- Packet Switching: The message is broken up into pieces and sent in any order. The recipient reassembles it after
- The Path: The path the message is between two computing devices
- Routing: The Process of finding a path from sender to receiver
- Bandwidth: The maximum amount of data that can be sent (bits per second)
- We use packets because there is a maximum amount of data (Bandwidth) that can be sent

### VIDEO 4.2.1-2

-The internet has been engineered to be fault tolerant, with abstractions for routing and transmitting data
- Redundancy is the inclusion of extra components that can be used to mitigate failure of a system if other components fail
-One way to accomplish network redundancy is by having more than one path between any to connected devices
- Fault tolerance makes a good network since there are multiple paths data can take to get from one device to any other device on the network
- More devices and more network connections makes network stronger
- A "fault tolerant" network means that it is designed to continue operating without interruption even if one or more of its components fail, by utilizing redundant systems and pathways to automatically reroute traffic and maintain connectivity in case of a failure; essentially, it can withstand component malfunctions without experiencing downtime.

### VIDEO 4.3.1
- A computer needs to handle many tasks
- Sequential processing: Tasks are run one after the other
- Parrallel Processing: Tasks are run at the same time
- Distributed Processing: Tasks are run on different computers