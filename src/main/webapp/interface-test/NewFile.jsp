<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
Source Code
<html>
<head>
    <meta charset="UTF-8">
    <title>Basic FileBox - jQuery EasyUI Demo</title>
    <link rel="stylesheet" type="text/css" href="../easyui1.5/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="../easyui1.5/themes/icon.css">
    <link rel="stylesheet" type="text/css" href="../easyui1.5/demo.css">
    <script type="text/javascript" src="../easyui1.5/jquery.min.js"></script>
    <script type="text/javascript" src="../easyui1.5/jquery.easyui.min.js"></script>
</head>
<body>
    <h2>Basic FileBox</h2>
    <p>The filebox component represents a file field of the forms.</p>
    <div style="margin:20px 0;"></div>
    <div class="easyui-panel" title="Upload File" style="width:100%;max-width:400px;padding:30px 60px;">
        <div style="margin-bottom:20px">
            <input class="easyui-textbox" label="Name:" labelPosition="top" style="width:100%">
        </div>
        <div style="margin-bottom:20px">
            <input class="easyui-filebox" label="File1:" labelPosition="top" data-options="prompt:'Choose a file...'" style="width:100%">
        </div>
        <div style="margin-bottom:40px">
            <input class="easyui-filebox" label="File2:" labelPosition="top" data-options="prompt:'Choose another file...'" style="width:100%">
        </div>
        <div>
            <a href="#" class="easyui-linkbutton" style="width:100%">Upload</a>
        </div>
    </div>
</body>
</html>