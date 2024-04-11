import pickle
import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
import string,time
from textblob import TextBlob
import sys

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier


inputData=[sys.argv[1]]
vector = pickle.load(open('./ml/twitter/vectorizer.pkl', 'rb'))
ak=vector.transform(inputData)
knn_model = pickle.load(open('./ml/twitter/knn.pkl', 'rb'))
result  = knn_model.predict(ak)

print(result)