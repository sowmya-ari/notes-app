pipeline {
    agent {
        docker {
            image 'node:10' 
        }
    }
    stages {
        stage('Cloning todo git repository') {
            steps {
              git 'https://github.com/sowmya-ari/notes-app.git'
            }
        }
        stage('Build') {
            parallel {
                stage('build backend'){
                  steps {
                    sh 'npm install'
                  }
                }
                stage('build frontend'){
                  steps {
                    sh 'cd client && npm install'
                  }
                }
            }
        }
        stage('Test') {
            parallel{
                stage('backend testing'){
                  steps {
                    sh 'cd test && npm test'
                  }
                }
                stage('frontend testing'){
                  steps {
                    sh 'cd client/src/test && npm test'
                  }
                }
            }
        }
        stage('Building Docker image') {
            parallel{
                stage('server image'){
                  steps {
                    sh 'docker image build -t web .'
                    sh 'docker tag web sowmya1234/notes-web:latest'
                  }
                }
                stage('client image'){
                  steps {
                    sh 'cd client && docker image build -t client .'
                    sh 'docker tag client sowmya1234/notes-client:latest' 
                  }
                }
            }
        }        
        stage('Ansible installation'){
            steps {
             sh 'apt-get update -qy && apt-get install -qy software-properties-common && apt-get install -qy ansible'
             sh 'apt-get install sshpass'
             sh 'which ansible'
            }
        }    
        stage('Deployment'){
            steps {
              withCredentials(bindings: [sshUserPrivateKey(credentialsId: 'privatekey-ec2', keyFileVariable: 'SSH_KEY_FOR_ec2')]) 
              {
                sh 'ssh -i ${SSH_KEY_FOR_ec2} -o StrictHostKeyChecking=no ec2-user@18.233.245.21'
                sh 'cd ansible && ansible all -m ping -i inventory.txt'
                sh 'cd ansible && ansible-playbook notes.yml -i inventory.txt -k -K'
              }     
            }
        }
    }
}    