const vulnerable_libraries = [
  'const os = require("os")',
  'import os from "os"',
  'const fs = require("fs")',
  'import fs from "fs"',
  'const path = require("path")',
  'import path from "path"',
  'const child_process = require("child_process")',
  'import { exec, spawn } from "child_process"',
  'const net = require("net")',
  'import net from "net"',
  'const http = require("http")',
  'import http from "http"',
  'const https = require("https")',
  'import https from "https"',
  'const dns = require("dns")',
  'import dns from "dns"',
  "#include <iostream>",
  "#include <fstream>",
  "#include <cstdio>",
  "#include <cstdlib>",
  "#include <unistd.h>",
  "#include <sys/types.h>",
  "#include <sys/stat.h>",
  "#include <fcntl.h>",
  "#include <sys/wait.h>",
  "#include <dirent.h>",
  "#include <pwd.h>",
  "#include <grp.h>",
  "#include <sys/socket.h>",
  "#include <arpa/inet.h>",
  "#include <netinet/in.h>",
  "#include <netdb.h>",
  "#include <signal.h>",
  "#include <errno.h>",
  "import os",
  "from os",
  "import sys",
  "import subprocess",
  "import platform",
  "import shutil",
  "import socket",
  "import psutil",
  "import tempfile",
  "import pwd",
  "import grp",
];

export default vulnerable_libraries