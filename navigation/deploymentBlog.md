---
layout: page
title: Deployment Blog
permalink: /deployment/blog/
---
## Step 1: change ports to 8051
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

## Collage Board Video Notes

VIDEO 4.1: 

- Around 1975 we had big computer, discovered that working with big computers in one area was bad so the internet was thought about
- Computers can send and receive data; they are an object use for
- A Packet is a small amount of data sent over a network. It includes a source and destination for this information. It is like taking a piece of a puzzle.
- Computers connect and communicate by creating a computer network: interconnected computing devices capable of sending or receiving data
- Packet Switching: The message is broken up into pieces and sent in any order. The recipient reassembles it after
- The Path: The path the message is between two computing devices
- Routing: The Process of finding a path from sender to receiver
- Bandwidth: The maximum amount of data that can be sent (bits per second)
- We use packets because there is a maximum amount of data (Bandwidth) that can be sent

VIDEO 4.2 

-The internet has been engineered to be fault tolerant, with abstractions for routing and transmitting data
- Redundancy is the inclusion of extra components that can be used to mitigate failure of a system if other components fail
-One way to accomplish network redundancy is by having more than one path between any to connected devices
- Fault tolerance makes a good network since there are multiple paths data can take to get from one device to any other device on the network
- More devices and more network connections makes network stronger
- A "fault tolerant" network means that it is designed to continue operating without interruption even if one or more of its components fail, by utilizing redundant systems and pathways to automatically reroute traffic and maintain connectivity in case of a failure; essentially, it can withstand component malfunctions without experiencing downtime.
- Computer needs to handle many tasks as it operates such as system tasks and user tasks
- System Tasks: the operating system has dozens of tasks like scheduling what it will be doing next, managing hardware, working with the network etc.
- User tasks: executing programs that the user has selected, such as running MS excel, MS Word, or computing games
Tasks need to be scheduled by the operating system. Balance tasks such as all CPUs are being used evenly and fully
Sequential Computing: Tasks are done one after another. It is a computational model in which operations are performing in order one at a time















