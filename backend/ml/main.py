
import pickle
import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingClassifier
from xgboost import XGBClassifier
from sklearn.ensemble import VotingClassifier
from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix
import seaborn as sns
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt
import sys


# Input array
input_array = [ [sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],sys.argv[6],sys.argv[7],sys.argv[8],sys.argv[9],sys.argv[10],sys.argv[11],] ]

# Create DataFrame
data = pd.DataFrame(input_array, columns=['pos', 'flw', 'flg', 'pic', 'lin', 'erl', 'erc', 'pr', 'fo', 'cs', 'pi'])

# Convert column data types
data = data.astype({'pos': int, 'flw': int, 'flg': int, 'pic': int, 'lin': int,
                'erl': float, 'erc': float, 'pr': float, 'fo': float, 'cs': float, 'pi': float})
data
standard_scaler = pickle.load(open('./ml/standar_scaler.pkl', 'rb'))

std=standard_scaler.transform(data)
# print(std)

pickled_model = pickle.load(open('./ml/fake.pkl', 'rb'))
result=pickled_model.predict(std)
print(result)