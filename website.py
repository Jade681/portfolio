from flask import Flask

app = Flask(__name__)

@app.route('/')
def my_homepage():
    return """
    <h1>我的第一个个人网站</h1>
    <p>全部用 Python + Flask 制作完成！</p>
    <p>大一编程学习专属网页项目</p>
    """

# 适配云端部署，修改运行方式
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
