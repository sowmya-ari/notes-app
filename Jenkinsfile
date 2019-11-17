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
    }
}    