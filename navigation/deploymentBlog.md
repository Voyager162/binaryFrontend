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